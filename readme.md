Agenda
- by using yaml format, how we are setting configs of kubernetes resources such as pods, services & deployments
- what is yaml? how to write?
- meaning of each config
YAML
 - yet another markup language or YAML ain't markup language
 - Official definition - YAML is a human-friendly, data serialization standard for all programming languages
 - mainly used for configurations
Why YAML over JSON/XML?
human friendly
human-readable
written using natural language
where to use YAML?
- for writing configs
- docker
- kubernetes
- python
structure
Yaml File example


https://eskala.io/tutorial/how-to-write-yaml-files-for-kubernetes/
https://developer.ibm.com/tutorials/yaml-basics-and-usage-in-kubernetes/



k8s deployments

https://www.google.com/search?sca_esv=ba9cb985dba3a779&rlz=1C1GCEA_enIN1101IN1101&q=how+to+provide+image+path+to+container+in+k8s&tbm=vid&source=lnms&prmd=visnbmtz&sa=X&ved=2ahUKEwje5sa7_aeFAxUTyDgGHS5pA60Q0pQJegQIDhAB&biw=1536&bih=834&dpr=1.25#fpstate=ive&vld=cid:1829aabc,vid:3mdCiFu52XA,st:0

https://www.google.com/search?q=run+application+on+k8s+using+docker+desktop&sca_esv=d3287875829add8c&sca_upv=1&rlz=1C1GCEA_enIN1101IN1101&biw=1536&bih=834&tbm=vid&ei=qZcOZvSZFqLDkPIP_5CuwA4&ved=0ahUKEwi0krDNwqiFAxWiIUQIHX-IC-gQ4dUDCA0&uact=5&oq=run+application+on+k8s+using+docker+desktop&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIitydW4gYXBwbGljYXRpb24gb24gazhzIHVzaW5nIGRvY2tlciBkZXNrdG9wMgwQIRgKGKABGMMEGAoyDBAhGAoYoAEYwwQYCkjsQFCyBFirO3AAeACQAQCYAZ4QoAHFL6oBDzItMy4yLjYtMS4wLjEuMbgBA8gBAPgBAZgCA6ACvQvCAggQABiABBiiBMICChAhGAoYoAEYwwSYAwCIBgGSBwcyLTIuNi0xoAeAIg&sclient=gws-wiz-video#fpstate=ive&vld=cid:fb2b9159,vid:dyaEzaDS7NQ,st:0

------------------



CREATE DOCKER IMAGE ----
docker build -t finapp .


CHECK IMAGE ----
Docker images


CHECK K8S CLUSTER ----
kubectl get all



CREATE DEPLOYMENT ----
kubectl apply -f deployment.yaml



CHECK K8 POD ----
kubectl get pod


CREATE SERVICE ----
kubectl apply -f service.yaml


CHECK K8S RESOURCES ----
kubectl get all


--------------------


-	Create any application EX. helloWorld application using Express/nodeJS
-	Run created application on localhost & verify its working properly.
-	Create Docker file as shown in reference application.
-	Before running docker file, install Docker desktop in your machine.
-	Now run this command, docker build -t finapp .
It will create docker image for application with ‘finapp’ as tagname.
-	Open docker desktop & check appropriate image is created for your application.
-	You can also check docker images on local using command, Docker images
-	Now go to Docker desktop & click on setting (Gear Icon), then click on ‘Kubernetes’ tab 
-	Install Kubernetes on your machine and then click on ‘Apply & Restart’. This will create a K8S Cluster on your machine.
-	To check created cluster run this - kubectl get all
-	Now create deployment.yaml file as shown 
-	This will create container on K8S











