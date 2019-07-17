# Swift to PlantUML (work-in-progress)

Using SourceKitten and PlantUML to generate UML class diagrams from swift source code.


![Class diagram output without relationship](screenshot.png)

## Usage


`sh plantuml.sh demo.swift`

will produce this diagram [Full Image](https://www.plantuml.com/plantuml/svg/hLPDRzim3BtxLmYzB46IItOPWY9esgv3WQq9wgA7NGPLPcmjicH8yjfis7-V9Dk9PEV31NOoHJu-qKyowUXAQInrcRFe0r9wooXFKIf0eGmaH8HXfT35CsIKCBX0MA7QHd-YKOuty22eWi4mYlusu6jAjWsujWru7t_2F87SXIipZ4fCUHMqrl5jRh1qCFCC21Qb5ZdMb3G0tn4WRqNvKjTPcUZo4Wq-ZuKa6Ks62DuqS4K5H_DvaFW8HBiqQxYaU8pYpVQQbJ0qAihIk4_bV3gzquXogWS4k0OvK_GtpFmNloiPspxW71B7jrywqjNuYs09y4TXU0ifj222jOjPWLIYKhaoUxv4REwAocZXCfl5hc1kYfWL4jRqBIZuIQGfmutKkzMvSaVQ8iD3N_BbUXs_KaqoH-QjQqc_qZJJiGPWrOi0B_FZV7iPtwdW8gtphF5UuQUUyjEUqj-8qbw7MwnnB4f9AZ4xthEYKauavEPg3TP2klJWh6f2dppC2Wusam1UDTuw_AR5AvQ9-WvI-EYsjqTvzzoSBIORHz0iJYeuAagL3NuObb4XYg3yFTF_f9b-xDj65bneqsLNflMOvcHzrOtgk4tMH8aSLfB-mXg-WSv44jHGvzpRy-AOTSY2G6-wEyeQK8Un7RCQMLBFloFkjzkndGxjSe2i6JMJoNmtesO8KMueg5OegeUDZJVOCExcpT5qEpsE1eCPOr7s6I3gFcjZNiSs42BucifS8IrGjEkfPt1-txFGVLDj8vikOr67kNo4wsPjWFzPEvfu-VBJJhvEfDkEEboTZxx5U31-dlSAU69_Og9_)

Generates the below content, which you can copy and paste it in [PlantText](https://www.planttext.com/?text=hLPDRzim3BtxLmYzB46IItOPWY9esgv3WQq9wgA7NGPLPcmjicH8yjfis7-V9Dk9PEV31NOoHJu-qKyowUXAQInrcRFe0r9wooXFKIf0eGmaH8HXfT35CsIKCBX0MA7QHd-YKOuty22eWi4mYlusu6jAjWsujWru7t_2F87SXIipZ4fCUHMqrl5jRh1qCFCC21Qb5ZdMb3G0tn4WRqNvKjTPcUZo4Wq-ZuKa6Ks62DuqS4K5H_DvaFW8HBiqQxYaU8pYpVQQbJ0qAihIk4_bV3gzquXogWS4k0OvK_GtpFmNloiPspxW71B7jrywqjNuYs09y4TXU0ifj222jOjPWLIYKhaoUxv4REwAocZXCfl5hc1kYfWL4jRqBIZuIQGfmutKkzMvSaVQ8iD3N_BbUXs_KaqoH-QjQqc_qZJJiGPWrOi0B_FZV7iPtwdW8gtphF5UuQUUyjEUqj-8qbw7MwnnB4f9AZ4xthEYKauavEPg3TP2klJWh6f2dppC2Wusam1UDTuw_AR5AvQ9-WvI-EYsjqTvzzoSBIORHz0iJYeuAagL3NuObb4XYg3yFTF_f9b-xDj65bneqsLNflMOvcHzrOtgk4tMH8aSLfB-mXg-WSv44jHGvzpRy-AOTSY2G6-wEyeQK8Un7RCQMLBFloFkjzkndGxjSe2i6JMJoNmtesO8KMueg5OegeUDZJVOCExcpT5qEpsE1eCPOr7s6I3gFcjZNiSs42BucifS8IrGjEkfPt1-txFGVLDj8vikOr67kNo4wsPjWFzPEvfu-VBJJhvEfDkEEboTZxx5U31-dlSAU69_Og9_)

```

@startuml
' styling goes here
class "Vehicle" as Vehicle {
+makeNoise()

}
class "Bicycle" as Bicycle {

}
class "Tandem" as Tandem {

}
class "Train" as Train {
+makeNoise()

}
class "Car" as Car {

}
class "AutomaticCar" as AutomaticCar {

}
class "Double" as Double << (E,orchid) extension >> {

}
class "Rect" as Rect << (S, SkyBlue) struct >> {

}
class "Rect" as Rect8 << (E,orchid) extension >> {
+init(center:size:)

}
class "FullyNamed" as FullyNamed << (P,GoldenRod) protocol >> {

}
class "Person" as Person << (S, SkyBlue) struct >> {

}
class "Starship" as Starship {
+init(name:prefix:)

}
class "Togglable" as Togglable << (P,GoldenRod) protocol >> {
+toggle()

}
class "OnOffSwitch" as OnOffSwitch << (E,LightSteelBlue) enum >> {
+toggle()

}
class "Named" as Named << (P,GoldenRod) protocol >> {

}
class "Aged" as Aged << (P,GoldenRod) protocol >> {

}
class "Person2" as Person2 << (S, SkyBlue) struct >> {

}
class "CounterDataSource" as CounterDataSource << (P,GoldenRod) protocol >> {
+increment(forCount:)

}
class "Counter" as Counter {
+increment()

}
class "ThreeSource" as ThreeSource {

}
class "TowardsZeroSource" as TowardsZeroSource {
+increment(forCount:)

}
class "IntStack" as IntStack << (S, SkyBlue) struct >> {
+push(_:)
+pop()

}
class "Stack" as Stack << (S, SkyBlue) struct >> {
+push(_:)
+pop()

}
class "Stack" as Stack23 << (E,orchid) extension >> {

}
class "AnotherPublicClass" as AnotherPublicClass {
-somePrivateMethod()

}
class "AnotherInternalClass" as AnotherInternalClass {
-somePrivateMethod()

}
class "AnotherFilePrivateClass" as AnotherFilePrivateClass {
+someFilePrivateMethod()
-somePrivateMethod()

}
class "AnotherPrivateClass" as AnotherPrivateClass {
+somePrivateMethod()

}
Bicycle --> Vehicle :  inherits 
Tandem --> Bicycle :  inherits 
Train --> Vehicle :  inherits 
Car --> Vehicle :  inherits 
AutomaticCar --> Car :  inherits 
Person --> FullyNamed :  confirms to 
Starship --> FullyNamed :  confirms to 
OnOffSwitch --> Togglable :  confirms to 
Person2 --> Named :  confirms to 
Person2 --> Aged :  confirms to 
ThreeSource --> NSObject 
ThreeSource --> CounterDataSource :  confirms to 
TowardsZeroSource --> NSObject 
TowardsZeroSource --> CounterDataSource :  confirms to 
@enduml


```

## Dependencies


* [SourceKitten](https://github.com/jpsim/SourceKitten)
* [jq](https://github.com/stedolan/jq)
* [NodeJS](https://nodejs.org/en/)


* Generates output for [PlantText*](https://www.planttext.com/)
