## Interested datapoints

```

"key.kind": "source.lang.swift.decl.class",
"key.kind": "source.lang.swift.decl.struct",
"key.kind": "source.lang.swift.decl.enum",
"key.kind" : "source.lang.swift.decl.function.method.instance",

"key.name" : "advance(to:)",






```


## function param name etc.,
```
"key.substructure" : [
            {
              "key.kind" : "source.lang.swift.decl.var.parameter",
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


## Tools

https://jqplay.org/