
public static class FirstUnique 
{
  public static int Solution(int[] A)
  {

    List<int> UniqueNumbers = [];

    A.ToList().ForEach(item =>
    {
      if(Array.FindAll(A, (num) => num == item).Length == 1)
      {
        UniqueNumbers.Add(item);
      }
    });

    return UniqueNumbers.Count == 0 ? -1 : UniqueNumbers[0];
  }
}