(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{362:function(n,e,t){"use strict";t.r(e),e.default="# Asynchronous Data Loading and Dynamic Update\n\n## Asynchronous Loading\n\nData in [Getting Started Example](${lang}/get-started) is directly updated by using `setOption`. But in many cases, data need to be filled by asynchronous loading frequently. `ECharts` can implement asynchronous loading in a simple way. You can get data asynchronously through a function such as jQuery and use `setOption` to fill in data and configs after the chart initialized.\n\n```js\nvar myChart = echarts.init(document.getElementById('main'));\n\n$.get('data.json').done(function(data) {\n  // Structure of data:\n  // {\n  //     categories: [\"Shirt\",\"Wool sweater\",\"Chiffon shirt\",\"Pants\",\"High-heeled shoes\",\"socks\"],\n  //     values: [5, 20, 36, 10, 10, 20]\n  // }\n  myChart.setOption({\n    title: {\n      text: 'Asynchronous Loading Example'\n    },\n    tooltip: {},\n    legend: {},\n    xAxis: {\n      data: data.categories\n    },\n    yAxis: {},\n    series: [\n      {\n        name: 'Sales',\n        type: 'bar',\n        data: data.values\n      }\n    ]\n  });\n});\n```\n\nOr display empty axes with all styles defined before fill in the data:\n\n```js\nvar myChart = echarts.init(document.getElementById('main'));\n// Show title, legends and empty axes\nmyChart.setOption({\n  title: {\n    text: 'Asynchronous Loading Example'\n  },\n  tooltip: {},\n  legend: {\n    data: ['Sales']\n  },\n  xAxis: {\n    data: []\n  },\n  yAxis: {},\n  series: [\n    {\n      name: 'Sales',\n      type: 'bar',\n      data: []\n    }\n  ]\n});\n\n// Asynchronous Data Loading\n$.get('data.json').done(function(data) {\n  // Fill in the data\n  myChart.setOption({\n    xAxis: {\n      data: data.categories\n    },\n    series: [\n      {\n        // Find series by name\n        name: 'Sales',\n        data: data.data\n      }\n    ]\n  });\n});\n```\n\nFor example:\n\n<md-example src=\"doc-example/tutorial-async\"></md-example>\n\nYou need to use `name` to \"navigate\" ECharts when updating data. In the previous example, the chart can update normally depending on the order of series, but we recommend you to add the `name` data while updating data.\n\n## loading Animation\n\nWhen it takes a long time to load the data, the user is facing the empty chart with only axes will wonder if there is a bug.\n\nECharts have a simple loading animation by default. You can call [showLoading](${mainSitePath}/api.html#echartsInstance.showLoading) to display. When the data loading was completed, call [hideLoading](${mainSitePath}/api.html#echartsInstance.hideLoading) to hide the animation.\n\n```js\nmyChart.showLoading();\n$.get('data.json').done(function (data) {\n    myChart.hideLoading();\n    myChart.setOption(...);\n});\n```\n\nHere is the effect:\n\n<md-example src=\"doc-example/tutorial-loading\"></md-example>\n\n## Dynamic Update\n\nECharts was driven by data, change in data will drive changes in the presentation of the chart. Therefore, It's surprisingly simple to implement a dynamic update.\n\nAll data's update was implemented by [setOption](${mainSitePath}/api.html#echartsInstance.setOption). You only need to fetch the data periodically. ECharts will find the difference between two groups of data to use the proper way to choose the animation.\n\nCheck the following example.\n\n<md-example src=\"doc-example/tutorial-dynamic-data\"></md-example>\n"}}]);