# icex

This is the icex project.


The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates
* ui.content: contains sample content using the components from the ui.apps


To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage

If you have a running AEM instance on a hosted VM you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage -PinstallOnVM
    

