package test.cucumberTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(features="Feature",format={"pretty","html:target\\html\\"})
	
		
	public class AppTest {
	 
	}
	
	
