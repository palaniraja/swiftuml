#!/bin/sh


FILE=$1

JQ='[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")?, select(."key.kind" == "source.lang.swift.decl.extension")? , select(."key.kind" == "source.lang.swift.decl.protocol")? | {kind: ."key.kind" , name: ."key.name", inherits: ."key.inheritedtypes", members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance"), select(."key.kind" == "source.lang.swift.decl.function.method.static"), select(."key.kind" == "source.lang.swift.decl.var.static" and ."key.accessibility" == "source.lang.swift.accessibility.public"), select(."key.kind" == "source.lang.swift.decl.var.instance" and ."key.accessibility" == "source.lang.swift.accessibility.public"), select(."key.kind" == "source.lang.swift.decl.function.method.class" and ."key.accessibility" == "source.lang.swift.accessibility.public") |       {name:  ."key.name", scope: ."key.accessibility", kind: ."key.kind", type: ."key.typename"})]} ]'

sourcekitten structure --file "$FILE" | jq "$JQ" > out.json

node plantuml.js
