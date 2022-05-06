namespace NailMasterApi.Entities
{
    public class PriceList
    {
        public int Id { get; set; }
        public List<PriceListElement> Elements { get; set; } = new List<PriceListElement>();
    }
}
