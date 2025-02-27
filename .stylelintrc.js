module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  plugins: [
    'stylelint-order'
  ],
  overrides: [
    {
      files: [ '*.scss', '**/*.scss' ], // 指定 .scss 檔
      rules: {
        'scss/no-global-function-names': null // 關閉此規則
      }
    }
  ],
  rules: {
    // ...
    'unit-allowed-list': [ 'em', 'rem', 'deg', 'px' ], // 可使用的單位
    'order/properties-order': [ // 設定排序順序（plugins 必須先定義 stylelint-order）
      'position',
      'top',
      'bottom',
      'right',
      'left',
      'display',
      'align-items',
      'justify-content',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bogttom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'z-index',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}