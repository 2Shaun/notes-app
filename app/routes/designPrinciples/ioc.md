# Inversion of Control

in many of the C# programs you've written, you defined properties using dot notation instead of defining them in a constructor, e.g.,
```
IPerson owner = new Person();
owner.firstName = "Tom"
```
vs.
```
IPerson owner = new Person {
	firstName = "Tom"
}
```

```
public class Logger : ILogger {

	public string Name {get; set;}
	public void Log(string message){
		console.PrintLn(message);
	}
}

public class Chore : IChore {

	ILogger logger;

	public Chore(ILogger logger) {
		_logger = logger;

		// it's Chore's job to define logger.name, not Logger
		_logger.name = "Chore logger";
	}

	public void DoWork(string task) {
		_logger.Log('Tom did ${task}');
	}
} 

public class Factory {
	public ILogger createLogger() {
		return new Logger();
	}
	public IChore createChore() {
		return new Chore(createLogger());
	}
}
```
- by accepting an interface as an argument, it lets the methods be easily mocked
- by defining the methods in the class, you don't have to redefine the method each time


