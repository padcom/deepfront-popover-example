<template>
  <Popover>
    <PopoverTarget type="menu">
      <Button>Click me</Button>
    </PopoverTarget>
    <PopoverPanel>
      <Menu @selected="console.log($event)">
        <MenuItem>First</MenuItem>
      </Menu>
    </PopoverPanel>
  </Popover>
</template>

<script lang="ts" setup>
import { Menu, MenuItem } from '@deepfront/menu'
import { Popover, PopoverTarget, PopoverPanel } from '@deepfront/popover'
import { Button } from '@deepfront/button'
</script>
