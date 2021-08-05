using System.Linq;

public class Kata
{
    public static int FindShort(string s)
    {
        string[] splitString = s.Split;
        var lengthOfEachWord = splitString.Select(word => word.Length);
        return lengthOfEachWord.Min();
    }
}