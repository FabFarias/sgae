package sgae;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import sgae.config.YAMLConfig;

@SpringBootApplication
@Controller
public class MyApplication implements CommandLineRunner {
 
    @Autowired
    private YAMLConfig myConfig;
 
    public static void main(String[] args) {
        System.out.println("teste");
    	SpringApplication app = new SpringApplication(MyApplication.class);
    	app.run();
    	System.out.println("teste2");
    }
 
    public void run(String... args) throws Exception {
        System.out.println("using environment: " + myConfig.getEnvironment());
        System.out.println("name: " + myConfig.getName());
        System.out.println("servers: " + myConfig.getServers());
    }

}
