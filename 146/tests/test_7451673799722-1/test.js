var test = {"uid":"7451673799722-1","reportElements":[{"title":" ant_parameter Reference parameter \"APP\" = ","message":null,"status":"success","type":"regular","time":"16:22:15:"},{"title":" ant_parameter Reference parameter \"UDID\" = emulator-5554","message":null,"status":"success","type":"regular","time":"16:22:15:"},{"title":" ant_parameter Reference parameter \"jenkinsEnv\" = android","message":null,"status":"success","type":"regular","time":"16:22:15:"},{"title":" Getting app path","message":null,"status":"success","type":"regular","time":"16:22:15:"},{"title":" App from /Users/runner/Desktop/App/dev/app-release.apk","message":null,"status":"success","type":"regular","time":"16:22:15:"},{"title":" Unable to create a new remote session. Please check the server log for more details. Original error: An unknown server-side error occurred while processing the command. Original error: The application at '/Users/runner/Desktop/App/dev/app-release.apk' does not exist or is not accessible\nBuild info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'\nSystem info: host: 'Mac-1673798908234.local', ip: '10.212.18.186', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.16', java.version: '1.8.0_352'\nDriver info: driver.version: Driver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: The application at '/Users/runner/Desktop/App/dev/app-release.apk' does not exist or is not accessible\n    at getResponseForW3CError (/usr/local/lib/node_modules/appium/node_modules/appium-base-driver/lib/protocol/errors.js:804:9)\n    at asyncHandler (/usr/local/lib/node_modules/appium/node_modules/appium-base-driver/lib/protocol/protocol.js:380:37)\nBuild info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'\nSystem info: host: 'Mac-1673798908234.local', ip: '10.212.18.186', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.16', java.version: '1.8.0_352'\nDriver info: driver.version: Driver","message":null,"status":"success","type":"regular","time":"16:22:19:"},{"title":" Fail: null","message":"java.lang.NullPointerException\n\tat MSK_APP.General.StartApp(General.java:57)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.junit.internal.runners.TestMethod.invoke(TestMethod.java:66)\n\tat org.junit.internal.runners.MethodRoadie.runTestMethod(MethodRoadie.java:105)\n\tat org.junit.internal.runners.MethodRoadie$2.run(MethodRoadie.java:86)\n\tat org.junit.internal.runners.MethodRoadie.runBeforesThenTestThenAfters(MethodRoadie.java:94)\n\tat org.junit.internal.runners.MethodRoadie.runTest(MethodRoadie.java:84)\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:49)\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\n\tat org.jsystemtest.plugin.JSystemMojo.executeSingleScenario(JSystemMojo.java:167)\n\tat org.jsystemtest.plugin.JSystemMojo.execute(JSystemMojo.java:132)\n\tat org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:210)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:156)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:148)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:117)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)\n\tat org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)\n\tat org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:128)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:305)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)\n\tat org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)\n\tat org.apache.maven.cli.MavenCli.execute(MavenCli.java:957)\n\tat org.apache.maven.cli.MavenCli.doMain(MavenCli.java:289)\n\tat org.apache.maven.cli.MavenCli.main(MavenCli.java:193)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)\n","status":"failure","type":"regular","time":"16:22:19:"},{"title":"Start time: Sun Jan 15 16:22:15 UTC 2023","message":null,"status":"success","type":"regular","time":"16:22:19"},{"title":"End time  : Sun Jan 15 16:22:19 UTC 2023","message":null,"status":"success","type":"regular","time":"16:22:19"},{"title":"Test running time: 3 sec.","message":null,"status":"success","type":"regular","time":"16:22:19"},{"title":" Setting return parameter. Name=EnvString value=null","message":null,"status":"success","type":"regular","time":"16:22:19:"}]};