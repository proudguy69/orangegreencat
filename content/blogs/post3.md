---
title: OGC SMP Alpha 0.3.0 Release!
description: Fixed dab pen, added blunt, bug fixes and more!
image: /bluntimg.png
---


# OGC SMP Alpha 0.3.0 Release!
![Man holding blunt](/BluntImg.png)

---
You can find it [here](https://modrinth.com/mod/ogcsmp)

Following changes:
```diff
+ Finally added durability to dab pen
+ Added blunt item
+ Added blunt crafting receipe
```

Nothing much to log here lowk, I figured out that durability is
```java
@Override
public boolean releaseUsing(ItemStack stack, Level level, LivingEntity livingEntity, int i) {
    if (level.isClientSide()) { return true;}
    if (livingEntity instanceof Player player) {
        EquipmentSlot equipmentSlot = stack.equals(player.getItemBySlot(EquipmentSlot.OFFHAND)) ? EquipmentSlot.OFFHAND : EquipmentSlot.MAINHAND;
        stack.hurtAndBreak(1, player, equipmentSlot);
    }
    this.stopUsing(livingEntity);
    return true;
}
```

Instead of
```java
@Override
public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity livingEntity) {
    //
}
```

Which is where i had the previous durability code..