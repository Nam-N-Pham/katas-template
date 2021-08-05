using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
    public static string Liftoff(List<int> instructions)
    {
        instructions.Sort();
        instructions.Reverse();
        var instructionsString = instructions.Select(instruction => instruction.ToString());
        string countdown = "";
        foreach (string instruction in instructionsString)
        {
            countdown = countdown + instruction + " ";
        }
        countdown = countdown + "liftoff!";
        return countdown;
    }
}