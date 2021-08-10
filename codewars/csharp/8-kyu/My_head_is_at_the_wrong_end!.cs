using System.Linq;

public class Kata
{
    public static string[] FixTheMeerkat(string[] arr)
    {
        string temp = arr[0];
        arr[0] = arr[2];
        arr[2] = temp;
        return arr;
    }
}