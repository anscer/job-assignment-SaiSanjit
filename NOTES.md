**APIs** for the application can be found here: https://www.postman.com/saisanjit/workspace/anscer-robots/collection/32034531-afbde35c-8476-4696-870a-23ed4c0a2934?action=share&creator=32034531


## Insights on the project

Here are my views on the robot system that can enhance their mobility and manage them in real time:

 - Defining a set of states that are associated with the robot. Example
   **Active**,**Idle**,**Error**, **Servcing**, etc. This can help in understading the states better.
 - Having a **unique id** for the state is useful for determing the state.
 - Implementing **event-driven actions** :   Triggering actions based on state changes makes the system responsive. This is helpful in case of **logging, sending notifications, history tracking or implemeting some opertaions**.
 - This is also useful when a robot falls into an error state, it can trigger an action or notify and alert the authorities.  
 - Detailed logging helps in debugging the robot states and make improvments accordingly.
 - Managing states in real time is be possible by having a active **full duplex communication.** This can be implmented by using libraries like **Socket Io** etc.
 - Addition to the state properties mentioned for a robot we can also include the following:
		 --**Priority level (critical, major, minor, trivial)**
		 --** Battery level, battery status, battery health**
     --** Temperature**
     --** Coordinates/Location of the robot**

	 ** Error Info** 
 - A secure communication system is also essential.
   
