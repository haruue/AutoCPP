set WshShell = WScript.CreateObject("WScript.Shell")   
For i = 1 To 500 '定义循环次数
    WScript.Sleep 2700
    WshShell.SendKeys "^{ENTER}"
Next