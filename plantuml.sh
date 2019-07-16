#!/bin/sh


FILE=$1

JQ='[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")?, select(."key.kind" == "source.lang.swift.decl.extension")? , select(."key.kind" == "source.lang.swift.decl.protocol")? | {kind: ."key.kind" , name: ."key.name", inhertics: ."key.inheritedtypes", members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]'

sourcekitten structure --file "$FILE" | jq "$JQ" > out.json

node plantuml.js