<template>
  <section>
    <slot />
  </section>
</template>

<style module lang="scss">
  // -------------------------| Variables
  $offset: map-get($roles-spaces-min, 'app');

  // -------------------------| Global configuration
  :global {
    @media print {
      .v--modal-overlay {
        display: none;
      }

      .v--modal-block-scroll {
        overflow: initial !important;
        width: inherit !important;
      }
    }

    @media screen {
      .v--modal-block-scroll #__nuxt {
        filter: blur(5px);
      }
    }

    .v--modal-overlay {
      //
    }

    .v--modal-background-click {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: rem($offset) rem($offset) rem(120px);
    }

    .v--modal-box {
      top: auto !important;
      left: auto !important;
      width: 100% !important;
      max-width: rem($roles-size-modal);
      padding: rem($offset);
    }
  }
</style>
