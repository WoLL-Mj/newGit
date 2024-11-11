import { Cascader } from 'antd';
import { render } from 'react-dom';

export default function CascaderDemo () {
    const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
                {
                  value: 'xiasha',
                  label: 'Xia Sha',
                  disabled: true,
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua men',
                },
              ],
            },
          ],
        },
      ]
    function onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }
    
    function filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }

    return (
        <Cascader
            options={options}
            onChange={onChange}
            placeholder="Please select"
            showSearch={{ filter }}

            // options={extra.categoryTree}
            // onChange={value => onChange(value)}
            // value={form.getFieldValue(config.key) || []}
            // disabled={isEditGoods}
            getPopupContainer={triggerNode => triggerNode.parentElement}
            // allowClear={false}
        />
    )


}