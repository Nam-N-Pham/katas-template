using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static int DontGiveMeFive(int start, int end)
    {
        return Enumerable.Range(start, end - start + 1).Count(num => !(num.ToString().Contains('5')));

        // // return Enumerable.Range(start, end - start + 1).Where(num => !(((num % 5) == 0) && (((num / 5) % 2) == 1))).Count();

        // var range = Enumerable.Range(start, end - start + 1);
        // var rangeArray = range.ToArray();

        // foreach (int num in rangeArray)
        // {
        //     foreach (char digit in num.ToString())
        //     {
        //         if (digit == '5')
        //             rangeArray.Remove(num);
        //     }
        // }

        // return rangeArray.Count();        
    }
}