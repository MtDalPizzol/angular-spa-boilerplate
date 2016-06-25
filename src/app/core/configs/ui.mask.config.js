export default function uiMaskConfig(uiMaskConfigProvider) {
  uiMaskConfigProvider.clearOnBlur(false);
}

uiMaskConfig.$inject = ['uiMask.ConfigProvider'];
