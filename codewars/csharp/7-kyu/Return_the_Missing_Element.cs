using System;
using System.Linq;

public static class Kata
{
    public static int GetMissingElement(int[] superImportantArray)
    {
        return Enumerable.Range(0, 10).Except(superImportantArray).First();

        // return Enumerable.Range(0, 10).Sum() - superImportantArray.Sum();
    }
}