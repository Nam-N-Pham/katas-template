using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
    public static int Solve(string str)
    {
        int count = 0;
        int longestCount = 0;
        List<char> vowels = new List<char>() { 'a', 'e', 'i', 'o', 'u' };

        for (int index = 0; index < str.Length; index++)
        {
            for (int vowelsIndex = 0; vowelsIndex < vowels.Count; vowelsIndex++)
            {
                if (str[index] == vowels[vowelsIndex])
                {
                    count++;
                    if (count > longestCount)
                    {
                        longestCount = count;
                    }
                    break;
                }
                if (vowelsIndex == vowels.Count - 1)
                {
                    count = 0;
                }
            }
        }

        return longestCount;
    }
}