namespace MoviesServer
{
  public class RandomBooleanGenerator
  {
    public bool GetRandomBoolean()
    {
      Random random = new Random();
      bool randomBoolean = random.Next(2) == 0;
      return randomBoolean;
    }
  }
}
