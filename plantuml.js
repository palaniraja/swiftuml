
let isSwiftClass = 'source.lang.swift.decl.class'
let isSwiftStruct = 'source.lang.swift.decl.struct'
let isSwiftEnum = 'source.lang.swift.decl.enum'
let isSwiftExtension = 'source.lang.swift.decl.extension'
let isSwiftProtocol = 'source.lang.swift.decl.protocol'
let isPublic = 'source.lang.swift.accessibility.internal'
let isPrivate = 'source.lang.swift.accessibility.private'



var STR2REPLACE = 'STR2REPLACE'

var plantumlTemplate = `
@startuml
' styling goes here
`+STR2REPLACE+`
@enduml
`

let styleStruct = `<< (S, SkyBlue) struct >>`
let styleExtn = `<< (E,orchid) extension >>`
let styleEnum = `<< (E,LightSteelBlue) enum >>`
let styleProtocol = `<< (P,GoldenRod) protocol >>`

function uniqName(item, index, relationship){
    var newName = item.name
    if (uniqElementNames.includes(item.name)) {
        newName += `${index}`
        if (item.kind == isSwiftExtension) {
            var connect = `${item.name} <.. ${newName} : ${relationship}`
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
        uniqElementAndTypes[item.name] = " " + relationship + " "
        
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
            msig += (method.scope == isPublic)? '+': '-'
            msig += method.name + '\n'
            methods += msig
        })
        
    }

    if (item.inherits && item.inherits.length > 0) {

        item.inherits.forEach(function (obj) {

            var linkTo = obj["key.name"]
            var namedConnection = (uniqElementAndTypes[linkTo]) ? ": " + uniqElementAndTypes[linkTo] : ""
            var connect = `${item.name} --> ${linkTo} ${namedConnection}`

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
