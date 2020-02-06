# Waziup

This repository implements a client to call APIs of the Waziup Cloud and Wazigate platform.

```ts
import * as waziup from "waziup";

// Read the name of this Wazigate.
var name = await waziup.getName();
console.log(`This Wazigate is ${name}`);

// List the sensors of this Wazigate.
var sensors = await waiup.getSensors();
console.log(`We have ${sensors.length} sensors:`, sensors);
```