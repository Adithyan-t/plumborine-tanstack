import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';

interface FormValues {
  title: string;
  cta: string;
  date: Moment | null;
  content: string;
  fileList?: any[];
}

const Welcome: React.FC = () => {
  const [form] = Form.useForm<FormValues>();

  useEffect(() => {
    form.setFieldsValue({
      title: 'Welcome To Plomberie 360 - Your Trusted Plumbing Partner.',
      cta: 'Contact Sales',
      date: moment('2024-11-06'),
      content:
        'At Plomberie 360, we redefine excellence in plumbing services. From leaky faucets to complex installations, our expert team is dedicated to delivering top-notch solutions tailored to your needs.',
    });
  }, [form]);

  const onFinish = (values: FormValues) => {
    console.log('Form values:', values);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="max-w-md min-w-full mx-auto bg-blue-900 rounded-lg">
      <Form form={form} name="plumberie_form" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="title"
          label={<span className="text-white">Title</span>}
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input className="text-white border-none h-[71px] bg-[#2A5486] font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <Form.Item
          name="cta"
          label={<span className="text-white">CTA</span>}
          rules={[{ required: true, message: 'Please input your CTA!' }]}
        >
          <Input className="text-white border-none h-[71px] bg-[#2A5486] font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <Form.Item
          name="date"
          label={<span className="text-white">Date</span>}
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker className="text-white border-none  h-[71px] bg-[#2A5486] font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <div className="text-white border-none h-fit bg-[#2A5486] font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]">
          <Form.Item valuePropName="fileList" getValueFromEvent={normFile} className="p-3">
            <Upload action="/upload.do" listType="picture-card" maxCount={1}>
              <button
                style={{ border: 0, background: 'none' }}
                type="button"
                className="text-white"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item
          name="content"
          label={<span className="text-white">Content</span>}
          rules={[{ required: true, message: 'Please input your content!' }]}
        >
          <Input.TextArea
            className="text-white border-none h-[71px] bg-[#2A5486] font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]"
            rows={4}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Welcome;
