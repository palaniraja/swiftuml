# Swift to PlantUML (work-in-progress)

Using SourceKitten and PlantUML to generate UML class diagrams from swift source code.


![Class diagram output without relationship](screenshot.png)

## Usage


`sh plantuml.sh demo.swift`

will produce this diagram [Full Image](https://www.plantuml.com/plantuml/svg/hLTBRzim3BxxLmYxBCNQOEjjGL4qZxOeqAL170pOBeDgCx4MMp8aUMts-E_Jmuubnt7TOPU4ukCJHL4a7Lm9YRaiiZHuYyBLb_jhzJjUheA4n80Wo-KEPP0z0XU1s1AQOuup918SioT2DsYDKm5xq-lvB8XIB0HwynaI4gNm1c61IXhz2X1wb-4jp1aHC3W9WZ-L-eH4kqgzf9LwBLzX6aDcn9RqfHmJQeMQwjfeYhbHLFyUnBYGBCEIH9M2o_0qPwnuB3sr9BguG8FhKyOZ5RGJ1CyIg22CeijBpp0aFwsP9enHU8h2xMwI5d22XEH599is2qQeD4Q6wccrXCWQQU9VR3wyxpwK2Y-XH0uYe1BuIAW3ZTmeXoo31MUIHIorHtOO1dfnUilI6EYIAVIyaZHy6bCc4-0UKeFN7-ocIDFT76SG6vnwsHzYePu1iubcoPwn3TKR4md9RIZAXHD6gjmOvHpMvDaBurAbEilcXNv_jq21OybiThPANZg8seuRE-z5t1CAc4yPtV12NIV1gRzLX_mevefjDYckdib-rSD1gNNz9_j07zRhy8d8A35mphhCqdkoIMGe0L9x2q2Bh0knpe9N9i1uKzffuhLvS-uapddFp9coGh-m6POuP0MFR40Fk3q2IsZ48LCNE5WpRW2yL2iXNVYcdNV12GTmF7BMVcLcJvZ7uYjmvcetkRrSlAFgZd6qDH3LeZEE2ZClH3Bufd0qpNBl43NQ_uOw_zYtALJbJ3KIrMeqpwjoDTluS2PC7IK_i8HF81CMUrwKLdVwzYXE3-0ymIi0RqXQAHrWDcKsLXhMaUoX--vuRBVsdOx3JLcMAw9keoxZnUhXk6MTg6FMijV4JY-rMst-M2SwSMPsjcZ72QhfwEpiz-L-iXeXGbLqY1H1EHuPSQNhYis0TCnOpph7PDv0P9GquIYKBN4uL2AdkuvGnEYQy4mWoO9zz-jMwsewnhAz0VeWRgCmHdKZyXMhccoKsjpn54pjz-Lk-JEXcOSFZz_ryEM9ZFbXyMvW7HJ79kA1GY_SYSKPkrSsAo_IvTcPSJYi1i6HBbv1MI4Lkofmbdy5DDPV3y5V)

Generates the below content, which you can copy and paste it in [PlantText](https://www.planttext.com/?text=hLTBRzim3BxxLmYxBCNQOEjjGL4qZxOeqAL170pOBeDgCx4MMp8aUMts-E_Jmuubnt7TOPU4ukCJHL4a7Lm9YRaiiZHuYyBLb_jhzJjUheA4n80Wo-KEPP0z0XU1s1AQOuup918SioT2DsYDKm5xq-lvB8XIB0HwynaI4gNm1c61IXhz2X1wb-4jp1aHC3W9WZ-L-eH4kqgzf9LwBLzX6aDcn9RqfHmJQeMQwjfeYhbHLFyUnBYGBCEIH9M2o_0qPwnuB3sr9BguG8FhKyOZ5RGJ1CyIg22CeijBpp0aFwsP9enHU8h2xMwI5d22XEH599is2qQeD4Q6wccrXCWQQU9VR3wyxpwK2Y-XH0uYe1BuIAW3ZTmeXoo31MUIHIorHtOO1dfnUilI6EYIAVIyaZHy6bCc4-0UKeFN7-ocIDFT76SG6vnwsHzYePu1iubcoPwn3TKR4md9RIZAXHD6gjmOvHpMvDaBurAbEilcXNv_jq21OybiThPANZg8seuRE-z5t1CAc4yPtV12NIV1gRzLX_mevefjDYckdib-rSD1gNNz9_j07zRhy8d8A35mphhCqdkoIMGe0L9x2q2Bh0knpe9N9i1uKzffuhLvS-uapddFp9coGh-m6POuP0MFR40Fk3q2IsZ48LCNE5WpRW2yL2iXNVYcdNV12GTmF7BMVcLcJvZ7uYjmvcetkRrSlAFgZd6qDH3LeZEE2ZClH3Bufd0qpNBl43NQ_uOw_zYtALJbJ3KIrMeqpwjoDTluS2PC7IK_i8HF81CMUrwKLdVwzYXE3-0ymIi0RqXQAHrWDcKsLXhMaUoX--vuRBVsdOx3JLcMAw9keoxZnUhXk6MTg6FMijV4JY-rMst-M2SwSMPsjcZ72QhfwEpiz-L-iXeXGbLqY1H1EHuPSQNhYis0TCnOpph7PDv0P9GquIYKBN4uL2AdkuvGnEYQy4mWoO9zz-jMwsewnhAz0VeWRgCmHdKZyXMhccoKsjpn54pjz-Lk-JEXcOSFZz_ryEM9ZFbXyMvW7HJ79kA1GY_SYSKPkrSsAo_IvTcPSJYi1i6HBbv1MI4Lkofmbdy5DDPV3y5V)

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
class "Size" as Size << (S, SkyBlue) struct >> {

}
class "Point" as Point << (S, SkyBlue) struct >> {

}
class "Rect" as Rect << (S, SkyBlue) struct >> {

}
class "Rect" as Rect10 << (E,orchid) extension >> {
  +init(center:size:)

}
class "SomeProtocol" as SomeProtocol << (P,GoldenRod) protocol >> {

}
class "AnotherProtocol" as AnotherProtocol << (P,GoldenRod) protocol >> {

}
class "FullyNamed" as FullyNamed << (P,GoldenRod) protocol >> {

}
class "Person" as Person << (S, SkyBlue) struct >> {

}
class "Starship" as Starship {
  +init(name:prefix:)

}
class "RandomNumberGenerator" as RandomNumberGenerator << (P,GoldenRod) protocol >> {
  +random()

}
class "LinearCongruentialGenerator" as LinearCongruentialGenerator {
  +random()

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
class "Stack" as Stack29 << (E,orchid) extension >> {

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
class "CompassPoint" as CompassPoint << (E,LightSteelBlue) enum >> {

}
class "A" as A {
  -someMethod()

}
class "B" as B {
  +someMethod()

}
class "C" as C {
  -someMethod()

}
class "D" as D {
  +someMethod()

}

Bicycle --|> Vehicle : inherits
Tandem --|> Bicycle : inherits
Train --|> Vehicle : inherits
Car --|> Vehicle : inherits
AutomaticCar --|> Car : inherits
Person ..|> FullyNamed : confirms to
Starship ..|> FullyNamed : confirms to
LinearCongruentialGenerator ..|> RandomNumberGenerator : confirms to
OnOffSwitch ..|> Togglable : confirms to
Person2 ..|> Named : confirms to
Person2 ..|> Aged : confirms to
ThreeSource --|> NSObject 
ThreeSource ..|> CounterDataSource : confirms to
TowardsZeroSource --|> NSObject 
TowardsZeroSource ..|> CounterDataSource : confirms to
B --|> A : inherits
D --|> C : inherits
Rect <.. Rect10 : ext
Stack <.. Stack29 : ext
@enduml






```

## Dependencies


* [SourceKitten](https://github.com/jpsim/SourceKitten)
* [jq](https://github.com/stedolan/jq)
* [NodeJS](https://nodejs.org/en/)


* Generates output for [PlantText*](https://www.planttext.com/)
