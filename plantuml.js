
let isSwiftClass = 'source.lang.swift.decl.class'
let isSwiftStruct = 'source.lang.swift.decl.struct'
let isSwiftEnum = 'source.lang.swift.decl.enum'
let isSwiftExtension = 'source.lang.swift.decl.extension'
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



var srcjs = require('./out.json')
// console.log(`total no. of elements:` + srcjs.length)

var msg = ''
var i = 0
srcjs.forEach(function (item){
    var strItem = ''
    if (item && item.kind == isSwiftClass && item.name){
        strItem += 'class "' + item.name + '" as ' + item.name + i + ' {\n'

    }
    else if (item && item.kind == isSwiftStruct && item.name){
        strItem += 'class "' + item.name + '" as ' + item.name + i + ' ' + styleStruct + ' {\n'

    }
    else if (item && item.kind == isSwiftExtension && item.name){
        strItem += 'class "' + item.name + '" as ' + item.name + i + ' ' + styleExtn + ' {\n'

    }
    else if (item && item.kind == isSwiftEnum && item.name) {
        strItem += 'class "' + item.name + '" as ' + item.name + i + ' ' + styleEnum + ' {\n'

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

    strItem += methods+ '\n}\n'
    msg += strItem
    i++
}
);

var out = plantumlTemplate.replace(STR2REPLACE, msg)

console.log(out)