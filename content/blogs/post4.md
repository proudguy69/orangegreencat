<!-- ---
title: OGC SMP Alpha 0.4.0 Release! [FINAL/LAST ALPHA update]
description: Added Crack pipe, and other things! This is the last update so we also tell you whats going forward
--- -->

# OGC SMP Alpha 0.4.0 Release!
![Orangegreencat holding crackppipe](/crackimg.png)


You can find it [here](https://modrinth.com/mod/ogcsmp)

Following changes:
```diff
+ Finally added Crack Pipe
+ Added Empty Crack Pipe
+ Adding 2 crafting receipies for the crack pipe
```

This update changes a few things, #1 is that I moved the code for consuming cocain to its own function, that way the effects of eating cocain carry through out all cocain products

This is the new code:
```java
public static boolean consumeCocain(ServerPlayer player, Level level) {
    try {
        // get the data
        CocainData data = CocainDao.dao.queryForId(player.getUUID());
        // check if we ever used before
        if (data == null) {
            Osmp.LOGGER.info("Cocain first use!");
            data = new CocainData(player.getUUID(), 1, level.getGameTime());
            CocainDao.dao.create(data);
            player.addEffect(new MobEffectInstance(MobEffects.SPEED, 20*60, 1));
            player.addEffect(new MobEffectInstance(MobEffects.INSTANT_HEALTH, 20, 1));
            player.addEffect(new MobEffectInstance(MobEffects.ABSORPTION, 20*60, 4));
            player.addEffect(new MobEffectInstance(MobEffects.STRENGTH, 20*40, 1));
            return true;
        }
        // check if its been 20 minutes * 7 (1 week) since last use
        long timeSince = data.timeSinceLastUse(level); // this is in seconds, (currentTime - lastUse) / 20
        int oneWeek = 60 * 20 * 7 * 20; // seconds, minutes, days, 20 tps
        if (timeSince < oneWeek) {
            player.removeAllEffects();
            Osmp.LOGGER.info("Its been less then a week... " + timeSince);
            data.use(level);
            CocainDao.dao.update(data);
            if (data.getUses() == 2) {
                player.addEffect(new MobEffectInstance(MobEffects.SPEED, 20*30));
                player.addEffect(new MobEffectInstance(MobEffects.ABSORPTION, 20*30, 2));
                player.addEffect(new MobEffectInstance(MobEffects.STRENGTH, 20*15));
            }
            // last positive effect before negative effects
            if (data.getUses() == 3) {
                player.addEffect(new MobEffectInstance(MobEffects.SPEED, 20*15));
                player.addEffect(new MobEffectInstance(MobEffects.ABSORPTION, 20*15));
            }

            if (data.getUses() == 4) {
                AttributeInstance attr = player.getAttribute(Attributes.MAX_HEALTH);
                UUID COCAIN_HEALTH_UUID = UUID.fromString("8c3b0b8a-7d8c-4e9c-9b62-1f9d55c1dabc");
                AttributeModifier modifier = new AttributeModifier(
                        Identifier.fromNamespaceAndPath(Osmp.MOD_ID, "cocain_health_penalty"),
                        -4.0,
                        AttributeModifier.Operation.ADD_VALUE
                );

                assert attr != null;
                attr.addOrReplacePermanentModifier(modifier);

                player.addEffect(new MobEffectInstance(MobEffects.POISON, 20));
            }

            if (data.getUses() == 5) {
                AttributeInstance attr = player.getAttribute(Attributes.MAX_HEALTH);
                UUID COCAIN_HEALTH_UUID = UUID.fromString("8c3b0b8a-7d8c-4e9c-9b62-1f9d55c1dabc");
                AttributeModifier modifier = new AttributeModifier(
                        Identifier.fromNamespaceAndPath(Osmp.MOD_ID, "cocain_health_penalty"),
                        -6.0,
                        AttributeModifier.Operation.ADD_VALUE
                );

                assert attr != null;
                attr.addOrReplacePermanentModifier(modifier);

                player.addEffect(new MobEffectInstance(MobEffects.WITHER, 20*30));
            }

            if (data.getUses() > 5) {
                AttributeInstance attr = player.getAttribute(Attributes.MAX_HEALTH);
                UUID COCAIN_HEALTH_UUID = UUID.fromString("8c3b0b8a-7d8c-4e9c-9b62-1f9d55c1dabc");
                assert attr != null;
                AttributeModifier modifier = new AttributeModifier(
                        Identifier.fromNamespaceAndPath(Osmp.MOD_ID, "cocain_health_penalty"),
                        -data.getUses()+1f,
                        AttributeModifier.Operation.ADD_VALUE
                );


                attr.addOrReplacePermanentModifier(modifier);

                player.addEffect(new MobEffectInstance(MobEffects.POISON, 20*15));
                player.addEffect(new MobEffectInstance(MobEffects.HUNGER, 20*30));
            }
        }
    } catch (SQLException e) {
        throw new RuntimeException(e);
    }
    return false;
}
```

Quite a lot isnt it? I also added 2 crafting receipies
1 using 4 iron, redstone, and cocain to make a fully laoded pipe
1 using a empty pipe + 1 cocain. 


### This is the LAST Alpha update
Exciting right? The todo list is almost complete! All thats left is polish! 

In the beta we can expect
- New Sound
- Particle Affects
- Custom animations
- Better commands for control
- Insurance? 
- And more!

Any ideas you want please submit to me because nows the time!