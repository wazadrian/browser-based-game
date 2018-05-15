export class ItemModel {
  constructor(
    public Id: number,
    public Name: string,
    public Price: number,
    public Type: types,
    public Equippable: boolean
  ) {}
}
enum types {
  Weapon,
  ArmorHelmet,
  ArmorBody,
  ArmorLeggings,
  ArmorShield,
  Ring,
  Necklace,
  Potion,
  Alchemy,
  Crafting,
  Other
}
