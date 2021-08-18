using System;
using System.Linq;
using System.Collections.Generic;

public class Digits
{
    public static string Explode(string s)
    {
        List<string> digits = new List<string>() { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
        string answer = "";

        for (int i = 0; i < s.Length; i++)
        {
            int CurrentDigitAsInt = (int)Char.GetNumericValue(s[i]);
            for (int j = CurrentDigitAsInt; j > 0; j--)
            {
                if (CurrentDigitAsInt == 0)
                    continue;
                answer += digits[CurrentDigitAsInt];
            }

        }

        return answer;
    }
}
