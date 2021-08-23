using System;

public class Kata
{
    public static string declareWinner(Fighter fighter1, Fighter fighter2, string firstAttacker)
    {
        int numAtkToKillFighter1 = (int)Math.Ceiling((double)fighter1.Health / fighter2.DamagePerAttack);
        int numAtkToKillFighter2 = (int)Math.Ceiling((double)fighter2.Health / fighter1.DamagePerAttack);

        if (numAtkToKillFighter1 == numAtkToKillFighter2)
        {
            return firstAttacker;
        }
        else
        {
            if (numAtkToKillFighter1 < numAtkToKillFighter2)
                return fighter2.Name;
            else
                return fighter1.Name;
        }
    }
}