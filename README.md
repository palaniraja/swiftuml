# Swift to PlantUML (work-in-progress)

Using SourceKitten and PlantUML to generate UML class diagrams from swift source code.


![Class diagram output without relationship](screenshot.png)

## Usage


`sh plantuml.sh samplecodes/11-Methods.swift`

Generates the below content, which you can copy and paste it in [PlantText](https://www.planttext.com/)

```

' styling goes here
@startuml
class "Counter" as Counter0 {
+increment()
+increment(by:)
+reset()

}
class "Point" as Point1 << (S, SkyBlue) struct >> {
+isToTheRightOf(x:)

}
class "Point2" as Point22 << (S, SkyBlue) struct >> {
+moveBy(x:y:)

}
class "Point3" as Point33 << (S, SkyBlue) struct >> {
+moveByX(deltaX:y:)

}
class "TriStateSwitch" as TriStateSwitch4 << (E,LightSteelBlue) enum >> {
+next()

}
class "SomeClass" as SomeClass5 {

}
class "LevelTracker" as LevelTracker6 << (S, SkyBlue) struct >> {
+advance(to:)

}
class "Player" as Player7 {
+complete(level:)
+init(name:)

}

@enduml
```

## Dependencies


* [SourceKitten](https://github.com/jpsim/SourceKitten)
* [jq](https://github.com/stedolan/jq)
* [NodeJS](https://nodejs.org/en/)


* Generates output for [PlantText*](https://www.planttext.com/)
