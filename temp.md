## Interested datapoints

```

"key.kind": "source.lang.swift.decl.class",
"key.kind": "source.lang.swift.decl.struct",
"key.kind": "source.lang.swift.decl.enum",
"key.kind" : "source.lang.swift.decl.function.method.instance",

"key.name" : "advance(to:)",




"key.attributes" : [
            {
              "key.attribute" : "source.decl.attribute.mutating",


```


## function param name etc.,
```
"key.substructure" : [
            {
              "key.kind" : "source.lang.swift.decl.var.parameter",
```


## inheritance

```
"key.inheritedtypes" : [
        {
          "key.name" : "NSObject"
        },
        {
          "key.name" : "UNUserNotificationCenterDelegate"
        }
      ],
```


### Working

Structs and Classes

```
[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? | ."key.name"? ]
```

with enums

```
[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")? | ."key.name"? ]

```

```
[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")? | {key: ."key.name", value: [
      (."key.substructure"[] |
        select(."key.kind" == "source.lang.swift.decl.function.method.instance") |
        ."key.name")]} ]

```


with types

```
[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")? | {kind: ."key.kind" , key: ."key.name", value: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |         ."key.name")]} ]

```

+ scope

```

[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")? | {kind: ."key.kind" , key: ."key.name", value: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]

```



```

[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")? | {kind: ."key.kind" , name: ."key.name", members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]

```


+ extension "source.lang.swift.decl.extension",

```

[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")?, select(."key.kind" == "source.lang.swift.decl.extension")? | {kind: ."key.kind" , name: ."key.name", members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]

```



+ inherits, "key.inheritedtypes"


[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")?, select(."key.kind" == "source.lang.swift.decl.extension")? | {kind: ."key.kind" , name: ."key.name", inhertics: ."key.inheritedtypes"?, members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]



[."key.substructure"[]? | select(."key.kind" == "source.lang.swift.decl.class")?, select(."key.kind" == "source.lang.swift.decl.struct")? , select(."key.kind" == "source.lang.swift.decl.enum")?, select(."key.kind" == "source.lang.swift.decl.extension")? | {kind: ."key.kind" , name: ."key.name", inhertics: [."key.inheritedtypes"."key.name"], members: [       (."key.substructure"[] |         select(."key.kind" == "source.lang.swift.decl.function.method.instance") |       {name:  ."key.name", scope: ."key.accessibility"})]} ]

## Tools

https://jqplay.org/