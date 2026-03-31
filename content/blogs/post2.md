---
title: OGC SMP Alpha 0.2.0 Release!
description: Bug fixes! bug fixes galore!

---

# OGC SMP Alpha 0.2.0 Release!
---
You can find it [here](https://modrinth.com/mod/ogcsmp)

Nothing major here, just fixed 2 bugs and changed the OSMP naming convention.

The bug was related to how I was calculating a safe Y to teleport players if they were beyond the world border when they werent supposed to be.
Before the code for teleporting a player looked like this:
```java
double clampedX = Math.clamp(player.getX(), -BORDER_RADIUS+2, BORDER_RADIUS-2);
double clampedZ = Math.clamp(player.getZ(), -BORDER_RADIUS+2, BORDER_RADIUS-2);
int safeY = level.getHeight(Heightmap.Types.MOTION_BLOCKING, (int) clampedX, (int) clampedZ);

BlockPos pos = new BlockPos((int) clampedX, 70, (int) clampedZ);

level.getChunk(pos);

player.teleportTo(level, clampedX, safeY, clampedZ, Set.of(), player.getYRot(), player.getXRot(), true);
```

After: 
```java
double clampedX = Math.clamp(player.getX(), -BORDER_RADIUS+2, BORDER_RADIUS-2);
double clampedZ = Math.clamp(player.getZ(), -BORDER_RADIUS+2, BORDER_RADIUS-2);


BlockPos pos = new BlockPos((int) clampedX, 70, (int) clampedZ);
level.getChunk(pos); 
// safeY calcuated AFTER loading the chunk
int safeY = level.getHeight(Heightmap.Types.MOTION_BLOCKING, (int) clampedX, (int) clampedZ);

player.teleportTo(level, clampedX, safeY, clampedZ, Set.of(), player.getYRot(), player.getXRot(), true);
```
I forgot to load the chunk before calculating the right high, I was loading it afterwords,, whoops,

The other bug had to do with me not writing safe code. Here:
```java
try {
    Toll data = TollDao.dao.queryForId(player.getUUID());
    if (data != null) {
        expired = data.expired(source.getLevel());
        if (!expired) {
            source.sendFailure(Component.literal("You have already paid the toll!"));
            return 1;
        }
    } 
    // Problem code!
    data = new Toll(player.getUUID(), 10);
    price = data.getPrice();
    TollDao.dao.create(data);
    

} catch (SQLException e) {
    throw new RuntimeException(e);
}
```

The problem with this code is that if your toll is expired itll try to create a new database object, but since you already have one an error would occure.
I of course fixed this by wrapping the problem code in an else statement

The naming convention before was:
"major".idontevenknow.minor/bugfix

now its major.minor.bugfix as it should have been
anything before 0.5.0 will be considered alpha
anything after 0.5.0 but less then 1.0.0 is beta
so as of this writing we are now in 0.2.0 in alpha