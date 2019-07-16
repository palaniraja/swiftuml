
let isSwiftClass = 'source.lang.swift.decl.class'
let isSwiftStruct = 'source.lang.swift.decl.struct'
let isSwiftEnum = 'source.lang.swift.decl.enum'
let isSwiftExtension = 'source.lang.swift.decl.extension'
let isSwiftProtocol = 'source.lang.swift.decl.protocol'
let isPublic = 'source.lang.swift.accessibility.internal'
let isPrivate = 'source.lang.swift.accessibility.private'



var STR2REPLACE = 'STR2REPLACE'

var plantumlTemplate = `
' styling goes here
@startuml
`+STR2REPLACE+`
@enduml
`

let styleStruct = `<< (S, SkyBlue) struct >>`
let styleExtn = `<< (E,orchid) extension >>`
let styleEnum = `<< (E,LightSteelBlue) enum >>`
let styleProtocol = `<< (P,GoldenRod) protocol >>`

function uniqName(name, index){
    var newName = name
    if (uniqElementNames.includes(name)) {
        newName += `${index}`
    }
    else {
        uniqElementNames.push(name)
    }
    return newName
}


var srcjs = require('./out.json')
// console.log(`total no. of elements:` + srcjs.length)

var msg = ''
var i = 0

var uniqElementNames = []

var connections = []



srcjs.forEach(function (item){
    var strItem = ''
    if (item && item.kind == isSwiftClass && item.name){
        
        strItem += 'class "' + item.name + '" as ' + uniqName(item.name, i) + ' {\n'

    }
    else if (item && item.kind == isSwiftStruct && item.name){
        strItem += 'class "' + item.name + '" as ' + uniqName(item.name, i) + ' ' + styleStruct + ' {\n'

    }
    else if (item && item.kind == isSwiftExtension && item.name){
        strItem += 'class "' + item.name + '" as ' + uniqName(item.name, i) + ' ' + styleExtn + ' {\n'

    }
    else if (item && item.kind == isSwiftEnum && item.name) {
        strItem += 'class "' + item.name + '" as ' + uniqName(item.name, i) + ' ' + styleEnum + ' {\n'

    }
    else if (item && item.kind == isSwiftProtocol && item.name) {
        strItem += 'class "' + item.name + '" as ' + uniqName(item.name, i) + ' ' + styleProtocol + ' {\n'

    }

    var methods = ''
    
    if (item.members && item.members.length>0){
        
        item.members.forEach(function (method) {
            var msig = ''
            msig += (method.scope == isPublic)? '+': '-'
            msig += method.name + '\n'
            methods += msig
        })
        
    }

    if (item.inhertics && item.inhertics.length > 0) {

        item.inhertics.forEach(function (obj) {
            // var msig = ''
            // msig += (method.scope == isPublic) ? '+' : '-'
            // msig += method.name + '\n'
            // methods += msig
            var connect = `${item.name} -- ${obj["key.name"]}: inhertics`
            // console.log(connect)
            connections.push(connect)
        })

    }

    strItem += methods+ '\n}\n'
    msg += strItem
    i++
}
);

var out = plantumlTemplate.replace(STR2REPLACE, msg + connections.join("\n"))

console.log(out)
