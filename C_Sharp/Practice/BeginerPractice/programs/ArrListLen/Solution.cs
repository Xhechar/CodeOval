
// public class ArrayListLength {
  
//   public static int Solution(int[] A) 
//   {
//     List<int> SolvedArray = [];
//     int LastItems = 0;

//     for (int i = 0; i <= A.Length - 1; i++)
//     {
//       if (i == 0)
//       {
//         SolvedArray.Add(A[0]);
//         continue;
//       }

//       int LastArrayItem = SolvedArray[^1];

//       if (LastArrayItem == -1)
//       {
//         LastItems++;
//         SolvedArray.Remove(LastArrayItem);
//         continue;
//       }

//       if (LastArrayItem > A.Length - 1)
//       {
//         break;
//       }

//       SolvedArray.Add(A[LastArrayItem]);
//     }

//     if(LastItems != 0) {
//       for (int i = 1; i <= LastItems; i ++)
//       {
//         SolvedArray.Add(-1);
//       }
//     }

//     return SolvedArray.Count;
//   }
// }

public class ArrayListLength
{
    public static int Solution(int[] A)
    {
        int length = 0;
        int index = 0;

        while (index != -1)  // follow until termination
        {
            index = A[index];
            length++;
        }

        return length;
    }
}