var test = {"uid":"7961673517305-5","reportElements":[{"title":" Fail: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'\nSystem info: host: 'Mac-1673516448201.local', ip: '10.79.1.188', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.16', java.version: '1.8.0_352'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {BROWSER_NAME: Chrome, app: https://appcenter-filemanag..., appActivity: com.dariomove.MainActivity, appPackage: com.dariomove.development, autoGrantPermissions: true, automationName: UIAutomator2, chromeOptions: {w3c: false}, chromedriverChromeMappingFile: Map/mapping.json, chromedriverExecutableDir: chromeD, chromedriver_autodownload: true, databaseEnabled: false, desired: {BROWSER_NAME: Chrome, app: https://appcenter-filemanag..., appActivity: com.dariomove.MainActivity, appPackage: com.dariomove.development, autoGrantPermissions: true, automationName: UIAutomator2, chromeOptions: {w3c: false}, chromedriverChromeMappingFile: Map/mapping.json, chromedriverExecutableDir: chromeD, chromedriver_autodownload: true, device: Android, deviceName: Android Device, ignoreUnimportantViews: true, newCommandTimeout: 0, noReset: false, platformName: android, setWebContentsDebuggingEnabled: true, setWebContentsDebuggingEnabled(BuildConfig.DEBUG): true, shouldUseCompactResponses: false, systemPort: 8202, udid: emulator-5554, –session-override: true}, device: Android, deviceApiLevel: 29, deviceManufacturer: unknown, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 560, deviceScreenSize: 1440x2560, deviceUDID: emulator-5554, ignoreUnimportantViews: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 0, noReset: false, pixelRatio: 3.5, platform: LINUX, platformName: Android, platformVersion: 10, setWebContentsDebuggingEnabled: true, setWebContentsDebuggingEnabled(BuildConfig.DEBUG): true, shouldUseCompactResponses: false, statBarHeight: 84, systemPort: 8202, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 2308, left: 0, top: 84, width: 1440}, warnings: {}, webStorageEnabled: false, –session-override: true}\nSession ID: 420f791d-6a31-4d55-ad7d-4db9ab915243\n*** Element info: {Using=accessibility id, value=phone_number_input}","message":"java.lang.Exception\n\tat MSK_APP._Appium.Exception(_Appium.java:273)\n\tat MSK_APP.Test.Phone_verification.Enter_phone_number(Phone_verification.java:281)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.junit.internal.runners.TestMethod.invoke(TestMethod.java:66)\n\tat org.junit.internal.runners.MethodRoadie.runTestMethod(MethodRoadie.java:105)\n\tat org.junit.internal.runners.MethodRoadie$2.run(MethodRoadie.java:86)\n\tat org.junit.internal.runners.MethodRoadie.runBeforesThenTestThenAfters(MethodRoadie.java:94)\n\tat org.junit.internal.runners.MethodRoadie.runTest(MethodRoadie.java:84)\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:49)\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor37.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\n\tat org.jsystemtest.plugin.JSystemMojo.executeSingleScenario(JSystemMojo.java:167)\n\tat org.jsystemtest.plugin.JSystemMojo.execute(JSystemMojo.java:132)\n\tat org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:210)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:156)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:148)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:117)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)\n\tat org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)\n\tat org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:128)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:305)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)\n\tat org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)\n\tat org.apache.maven.cli.MavenCli.execute(MavenCli.java:957)\n\tat org.apache.maven.cli.MavenCli.doMain(MavenCli.java:289)\n\tat org.apache.maven.cli.MavenCli.main(MavenCli.java:193)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)\n","status":"failure","type":"regular","time":"09:57:38:"},{"title":"Thu Jan 12 095739 UTC 2023.png","message":"Thu Jan 12 095739 UTC 2023.png","status":"success","type":"img","time":"09:57:39"},{"title":"Thu Jan 12 095741 UTC 2023.mp4","message":"Thu Jan 12 095741 UTC 2023.mp4","status":"success","type":"lnk","time":"09:57:41"},{"title":"Start time: Thu Jan 12 09:57:38 UTC 2023","message":null,"status":"success","type":"regular","time":"09:57:41"},{"title":"End time  : Thu Jan 12 09:57:41 UTC 2023","message":null,"status":"success","type":"regular","time":"09:57:41"},{"title":"Test running time: 2 sec.","message":null,"status":"success","type":"regular","time":"09:57:41"}]};