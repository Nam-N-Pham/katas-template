using System.Linq;
using System;
public static class Kata
{
    public static bool XO(string input)
    {
        string lowercaseInput = input.ToLower();
        int xCount = 0;
        int oCount = 0;

        for (int index = 0; index < lowercaseInput.Length; index++)
        {
            if (lowercaseInput[index] == 'x')
                xCount++;
            if (lowercaseInput[index] == 'o')
                oCount++;
        }

        return xCount == oCount;
    }
}