
let isSwiftClass = 'source.lang.swift.decl.class'
let isSwiftStruct = 'source.lang.swift.decl.struct'
let isSwiftEnum = 'source.lang.swift.decl.enum'
let isSwiftExtension = 'source.lang.swift.decl.extension'
let isSwiftProtocol = 'source.lang.swift.decl.protocol'
let isPublic = 'source.lang.swift.accessibility.public'
let isPrivate = 'source.lang.swift.accessibility.private'
let isInternal = 'source.lang.swift.accessibility.internal'
let isStaticMethod = 'source.lang.swift.decl.function.method.static'
let isStaticVariable = 'source.lang.swift.decl.var.static'
let isNull = null


let linkTypeInheritance = '--|>' 
let linkTypeRealize = '..|>' 
let linkTypeDependency = '<..' 
let linkTypeAssociation = '-->' 
let linkTypeAggregation = '--o' 
let linkTypeComposition = '--*' 
let linkTypeGeneric = '--'


var STR2REPLACE = 'STR2REPLACE'

var plantumlTemplate = `
@startuml
' STYLE START
hide empty members
skinparam shadowing false
' STYLE END
`+STR2REPLACE+`
@enduml
`

let styleStruct = `<< (S, SkyBlue) struct >>`
let styleExtn = `<< (E,orchid) extension >>`
let styleEnum = `<< (E,LightSteelBlue) enum >>`
let styleProtocol = `<< (P,GoldenRod) protocol >>`

function uniqName(item, index, relationship){
    var newName = item.name
    var linkTypeKey = item.name + "LinkType"
    if (uniqElementNames.includes(item.name)) {
        newName += `${index}`
        if (item.kind == isSwiftExtension) {
            var connect = `${item.name} ${linkTypeDependency} ${newName} : ${relationship}`
            extnConnections.push(connect)
            
        }
    }
    // else if(item.kind == isSwiftExtension) {
    //     newName += `${index}`
    //     var connect = `${item.name} <.. ${newName} : ${relationship}`
    //     extnConnections.push(connect)
    // }
    else {
        uniqElementNames.push(item.name)
        uniqElementAndTypes[item.name] =  relationship 

        if (relationship == "inherits"){
            uniqElementAndTypes[linkTypeKey] = linkTypeInheritance
        }
        else if (relationship == "confirms to") {
            uniqElementAndTypes[linkTypeKey] = linkTypeRealize
        }
        else if (relationship == "ext") {
            uniqElementAndTypes[linkTypeKey] = linkTypeDependency
        }
        else if (relationship == "association") {
            uniqElementAndTypes[linkTypeKey] = linkTypeAssociation
        }
        else if (relationship == "aggregation") {
            uniqElementAndTypes[linkTypeKey] = linkTypeAggregation
        }
        else if (relationship == "composition") {
            uniqElementAndTypes[linkTypeKey] = linkTypeComposition
        }
        else {
            uniqElementAndTypes[linkTypeKey] = linkTypeGeneric
        }
        
    }
    return newName
}


var srcjs = require('./out.json')
// console.log(`total no. of elements:` + srcjs.length)

var msg = ''
var i = 0

var uniqElementNames = []
var uniqElementAndTypes = {}

var connections = []
var extnConnections = []


srcjs.forEach(function (item){
    var strItem = ''
    if (item && item.kind == isSwiftClass && item.name){
        
        strItem += 'class "' + item.name + '" as ' + uniqName(item, i, "inherits") + ' {\n'

    }
    else if (item && item.kind == isSwiftStruct && item.name){
        strItem += 'class "' + item.name + '" as ' + uniqName(item, i, "inherits") + ' ' + styleStruct + ' {\n'

    }
    else if (item && item.kind == isSwiftExtension && item.name){
            strItem += 'class "' + item.name + '" as ' + uniqName(item, i, "ext") + ' ' + styleExtn + ' {\n'

    }
    else if (item && item.kind == isSwiftEnum && item.name) {
        strItem += 'class "' + item.name + '" as ' + uniqName(item, i, "") + ' ' + styleEnum + ' {\n'

    }
    else if (item && item.kind == isSwiftProtocol && item.name) {
        strItem += 'class "' + item.name + '" as ' + uniqName(item, i, "confirms to") + ' ' + styleProtocol + ' {\n'

    }

    var methods = ''
    
    if (item.members && item.members.length>0){
        
        item.members.forEach(function (method) {
            var msig = '  '
            msig += (method.kind == isStaticMethod || method.kind == isStaticVariable)? '{static} ': ''
            msig += (method.scope == isPublic)? '+': (method.scope == isInternal)? '~': '-'
            msig += method.name

            if (method.type == isNull) {
                msig += '\n'
            }
            else {
                msig += ': ' + method.type + '\n'
            }

            methods += msig
        })
        
    }

    if (item.inherits && item.inherits.length > 0) {

        item.inherits.forEach(function (obj) {

            var linkTo = obj["key.name"]
            var namedConnection = (uniqElementAndTypes[linkTo]) ? ": " + uniqElementAndTypes[linkTo] : ""
            var linkTypeKey = item.name + "LinkType"
            
            if (uniqElementAndTypes[linkTo] == "confirms to"){
                linkTypeKey = linkTo + "LinkType"
            }
           
            var connect = `${item.name} ${uniqElementAndTypes[linkTypeKey]} ${linkTo} ${namedConnection}`
            connections.push(connect)
        })

    }

    strItem += methods+ '\n}\n'
    msg += strItem
    i++
}
);

var out = plantumlTemplate.replace(STR2REPLACE, msg + "\n" + connections.join("\n") + "\n" + extnConnections.join("\n"))

console.log(out)
