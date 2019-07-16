//MARK:- Inheritance

// Base Class
class Vehicle {
    var currentSpeed = 0.0
    var description: String {
        return "traveling at \(currentSpeed) miles per hour"
    }
    func makeNoise() {
        // do nothing - an arbitrary vehicle doesn't necessarily make a noise
    }
}


class Bicycle: Vehicle {
    var hasBasket = false
}



class Tandem: Bicycle {
    var currentNumberOfPassengers = 0
}




// Overriding
// Overriding methods
class Train: Vehicle {
    override func makeNoise() {
        print("Choo Choo")
    }
}


//Overriding Properties

class Car: Vehicle {
    var gear = 1
    override var description: String {
        return super.description + " in gear \(gear)"
    }
}


// Overriding Property Observers
class AutomaticCar: Car {
    override var currentSpeed: Double {
        didSet{
            gear = Int(currentSpeed / 10.0) + 1
        }
    }
}


//MARK:- Extensions


// Computed Properties
extension Double {
    var km: Double { return self * 1_000.0 }
    var m: Double { return self }
    var cm: Double { return self / 100.0 }
    var mm: Double { return self / 1_000.0 }
    var ft: Double { return self / 3.28084 }
}

//  Extensions can add new computed properties, but they cannot add stored properties, or add property observers to existing properties.


// Initializers
struct Size {
    var width = 0.0, height = 0.0
}
struct Point {
    var x = 0.0, y = 0.0
}
struct Rect {
    var origin = Point()
    var size = Size()
}

extension Rect {
    init(center: Point, size: Size) {
        let originX = center.x - (size.width / 2)
        let originY = center.y - (size.height / 2)
        self.init(origin: Point(x: originX, y: originY), size: size)
    }
}



//MARK:- Protocols


// Property Requirements
//  Property requirements are always declared as variable properties, prefixed with the var keyword.

protocol SomeProtocol {
    var mustBeSettable: Int { get set }
    var doesNotNeedToBeSettable: Int { get }
}

//  Always prefix type property requirements with the static keyword when you define them in a protocol. This is true even though type property requirements can be prefixed with the static or class keyword when implemented by a class:

protocol AnotherProtocol {
    static var someTypeProperty: Int { get set }
}

// Here's an example of a protocol with a single instance property requirement:
protocol FullyNamed {
    var fullName: String { get }
}

struct Person: FullyNamed {
    var fullName: String
}


class Starship: FullyNamed {
    var prefix: String?
    var name: String
    init(name: String, prefix: String? = nil) {
        self.name = name
        self.prefix = prefix
    }
    var fullName: String {
        return ((prefix != nil ? prefix! + " " : "") + name)
    }
}




protocol RandomNumberGenerator {
    func random() -> Double
}

// linear congruential generator:
class LinearCongruentialGenerator: RandomNumberGenerator {
    var lastRandom = 42.0
    let m = 139968.0
    let a = 3877.0
    let c = 29573.0
    func random() -> Double {
        lastRandom = ((lastRandom * a + c).truncatingRemainder(dividingBy:m))
        return lastRandom / m
    }
}



// Mutating Method Requirements
protocol Togglable {
    mutating func toggle()
}

enum OnOffSwitch: Togglable {
    case off, on
    mutating func toggle() {
        switch self {
        case .off:
            self = .on
        case .on:
            self = .off
        }
    }
}


// Protocol Composition
protocol Named {
    var name: String { get }
}
protocol Aged {
    var age: Int { get }
}
struct Person2: Named, Aged {
    var name: String
    var age: Int
}

// Optional Protocol Requirements

@objc protocol CounterDataSource {
    @objc optional func increment(forCount count: Int) -> Int
    @objc optional var fixedIncrement: Int { get }
}

class Counter {
    var count = 0
    var dataSource: CounterDataSource?
    func increment() {
        if let amount = dataSource?.increment?(forCount: count) {
            count += amount
        } else if let amount = dataSource?.fixedIncrement {
            count += amount
        }
    }
}

class ThreeSource: NSObject, CounterDataSource {
    let fixedIncrement = 3
}


@objc class TowardsZeroSource: NSObject, CounterDataSource {
    func increment(forCount count: Int) -> Int {
        if count == 0 {
            return 0
        } else if count < 0 {
            return 1
        } else {
            return -1
        }
    }
}


// MARK:-  Generic Types

// Non-generic version of a Stack first
struct IntStack {
    var items = [Int]()
    mutating func push(_ item: Int) {
        items.append(item)
    }
    mutating func pop() -> Int {
        return items.removeLast()
    }
}

// Now a Generic version
struct Stack<Element> {
    var items = [Element]()
    mutating func push(_ item: Element) {
        items.append(item)
    }
    mutating func pop() -> Element {
        return items.removeLast()
    }
}

// Extending a Generic Type

extension Stack {
    var topItem: Element? {
        return items.isEmpty ? nil : items[items.count - 1]
    }
}


// MARK: - Access levels


// Default Access level - Internal


// Access Control Syntax
public class SomePublicClass {}
internal class SomeInternalClass {}
fileprivate class SomeFilePrivateClass {}
private class SomePrivateClass {}

public var somePublicVariable = 0
internal let someInternalConstant = 0
fileprivate func someFilePrivateFunction() {}
private func somePriviateFunction() {}

class SomeImplicitlyInternalClass {}        // implicitly internal
let someImplicitlyInternalConstant = 0      // implicitly internal


public class AnotherPublicClass {           // explicitly public class
    public var somePublicProperty = 0       // explicitly public class member
    var someInternalProperty = 0            // implicitly internal class member
    private func somePrivateMethod() {}     // explicitly private class member
}

class AnotherInternalClass {                // implicitly internal class
    var someInternalProperty = 0            // implicitly internal class member
    private func somePrivateMethod() {}     // explicitly private class member
}

fileprivate class AnotherFilePrivateClass { // explicitly file-private class
    func someFilePrivateMethod() {}         // inplicitly file-private method
    private func somePrivateMethod() {}     // explicitly file-private method
}

private class AnotherPrivateClass {         // explicitly private class
    var somePrivateProperty = 0             // implicitly private class member
    func somePrivateMethod() {}             // implicitly private class member
}


// Tuple Types
//  Tuples don't have a way to explicitly set their access level. Instead the tuples access level is set from the most restrictive access level of its components


// Function Types
//  The access level of a function is set as the most restrictive access level of the function arguments and return type. You also must explicitly set the access level of the function type if it doesn't match the default
/*
func someFunction() -> (SomeInternalClass, SomePrivateClass) {
    // function implementation goes here
}

The function above won't compile because the SomePrivateClass sets the function type to private which is not explicitly set.
*/
private func someFunction() -> (SomeInternalClass, SomePrivateClass) {
    // function implementation goes here
    return (SomeInternalClass(), SomePrivateClass())
}


// Enumeration Types
// The individual cases of an enumeration have the same access level as the enum
private enum CompassPoint {
    case north
    case south
    case east
    case west
}



// Subclasses
// A subclass cannot have a higher access level than its superclass.
// An override can make an inherited class member more accessible than its superclass.
public class A {
    fileprivate func someMethod() {}
}

internal class B: A {
    override internal func someMethod() {}
}

public class C {
    fileprivate func someMethod() {}
}
internal class D: C {
    override internal func someMethod() {
        super.someMethod()
    }
}

