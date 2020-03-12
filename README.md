# Swift to PlantUML

Using SourceKitten and PlantUML to generate UML class diagrams from swift source code.


![Class diagram output without relationship](screenshot.png)

## Usage


`sh plantuml.sh demo.swift`

If you want to run on multiple files at the moment, you can do some command line kung fu like below

`ls -d "/directory/full/of/swift/files/"* | xargs -L 1 sh plantuml.sh  | pbcopy`

once it copy everything to your clipboard (MacOS) you can paste it in your favorite text editor replace multiple `@startuml` and `@enduml` block and have just one _startuml_ at top and _enduml_ at the bottom

will produce this diagram [Full Image](https://www.plantuml.com/plantuml/svg/hLPBRzim3BxhLmYzBCNQ7BhB41H1qzTGe4k3EXYmNGPLPc8jUXYIl3PRzzydoNOYnMtc0hia5Fdn4qM9fD6PiKJRId3q3cVphxTNxdToFqS5om63AEqQ2n0Fe0qoAoPBeed0fY2vUcHoYHU46zYuNaql4UN467pm1Gf6EHnWOd0Zuzy8u_U2h62gc8718K9_MlWve-iMtiWElhNFYSn117CjfbPDcAoDNjgtqGNH0UZ-4uf9PPKWbj4M42iIvAMg7ff8Qn6VdkB1rP7Ir2Nj4CEJ1McOadWyJXplWThWveNWb1tXRBK-vnKSOcDrvTJxV3xktycTcKbc1nIa1Jqox1UCugDVLvolfqH07XYtoq0xE_gaU0xoNZdcKYkhgEAxuSpSEr1rfcknvp4ozyXCmShWsIwYaAKBOrHgMB2d9EIvMYuvQTEzMVqhO4ThFJQz-ZjvjrXaZypI8j15woQnjsnPsCm2yFem82knZt6Rp3VcSR9i_BpmrlIVHFa_wNa15whoZ-AIM9AfIjCweHrjZyGoIJK8zyG62wK3GN9Z3MLCl-kNN72X0QA8edLQuUgHwDny0wrYzAwsLuWtqjqneQj0qIxsvj5nbfKf1jyTZvTLcHnYo_Q_gKu-z6qk4wbi0Nhc6f9hMLvNlw-EEiHmR9I0cMO_YONFO0kL9r4qNZV-zYJX7Rh4y0R2QyPRK8TprrRdojD6bWrrtnrVs-tbdLwWG-qqEZv-7cycsGWpwLYODQWPHy7SOcDp64YlEVlPyfej6K01v8K8q7JWuT2PecO-mbJ91TF2OAlGfjdkXyMzC22tlJO5jcqdW5vYIW2XlQNskCB3gQRPtSCFFn4JKt3lzgSThaxzxp9s0Bruwm4z73PJT-JB3ZMrxRHjQTRwCv2v_tv2Vm40)

Generates the below content, which you can copy and paste it in [PlantText](https://www.planttext.com/?text=hLPBRzim3BxhLmYzBCNQ7BhB41H1qzTGe4k3EXYmNGPLPc8jUXYIl3PRzzydoNOYnMtc0hia5Fdn4qM9fD6PiKJRId3q3cVphxTNxdToFqS5om63AEqQ2n0Fe0qoAoPBeed0fY2vUcHoYHU46zYuNaql4UN467pm1Gf6EHnWOd0Zuzy8u_U2h62gc8718K9_MlWve-iMtiWElhNFYSn117CjfbPDcAoDNjgtqGNH0UZ-4uf9PPKWbj4M42iIvAMg7ff8Qn6VdkB1rP7Ir2Nj4CEJ1McOadWyJXplWThWveNWb1tXRBK-vnKSOcDrvTJxV3xktycTcKbc1nIa1Jqox1UCugDVLvolfqH07XYtoq0xE_gaU0xoNZdcKYkhgEAxuSpSEr1rfcknvp4ozyXCmShWsIwYaAKBOrHgMB2d9EIvMYuvQTEzMVqhO4ThFJQz-ZjvjrXaZypI8j15woQnjsnPsCm2yFem82knZt6Rp3VcSR9i_BpmrlIVHFa_wNa15whoZ-AIM9AfIjCweHrjZyGoIJK8zyG62wK3GN9Z3MLCl-kNN72X0QA8edLQuUgHwDny0wrYzAwsLuWtqjqneQj0qIxsvj5nbfKf1jyTZvTLcHnYo_Q_gKu-z6qk4wbi0Nhc6f9hMLvNlw-EEiHmR9I0cMO_YONFO0kL9r4qNZV-zYJX7Rh4y0R2QyPRK8TprrRdojD6bWrrtnrVs-tbdLwWG-qqEZv-7cycsGWpwLYODQWPHy7SOcDp64YlEVlPyfej6K01v8K8q7JWuT2PecO-mbJ91TF2OAlGfjdkXyMzC22tlJO5jcqdW5vYIW2XlQNskCB3gQRPtSCFFn4JKt3lzgSThaxzxp9s0Bruwm4z73PJT-JB3ZMrxRHjQTRwCv2v_tv2Vm40)

```

@startuml
' STYLE START
hide empty members
skinparam shadowing false
' STYLE END
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

Bicycle --|> Vehicle : inherits
Tandem --|> Bicycle : inherits
Train --|> Vehicle : inherits
Car --|> Vehicle : inherits
AutomaticCar --|> Car : inherits
Person ..|> FullyNamed : confirms to
Starship ..|> FullyNamed : confirms to
OnOffSwitch ..|> Togglable : confirms to
Person2 ..|> Named : confirms to
Person2 ..|> Aged : confirms to
ThreeSource --|> NSObject 
ThreeSource ..|> CounterDataSource : confirms to
TowardsZeroSource --|> NSObject 
TowardsZeroSource ..|> CounterDataSource : confirms to
Rect <.. Rect8 : ext
Stack <.. Stack23 : ext
@enduml

```

## Dependencies


* [SourceKitten](https://github.com/jpsim/SourceKitten)
* [jq](https://github.com/stedolan/jq)
* [NodeJS](https://nodejs.org/en/)


* Generates output for [PlantText*](https://www.planttext.com/)
