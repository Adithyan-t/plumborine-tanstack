import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

const Welcome = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title: "Welcome To Plomberie 360 - Your Trusted Plumbing Partner.",
      cta: "Contact Sales",
      date: moment("2024-11-06"),
      content: "At Plomberie 360, we redefine excellence in plumbing services. From leaky faucets to complex installations, our expert team is dedicated to delivering top-notch solutions tailored to your needs."
    });
  }, [form]);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="bg-blue-900 min-w-full rounded-lg max-w-md mx-auto">
      <Form
        form={form}
        name="plumberie_form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="title"
          label={<span className="text-white">Title</span>}
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input className="  text-white border-none h-[71px] bg-[#2A5486]  font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <Form.Item
          name="cta"
          label={<span className="text-white">CTA</span>}
          rules={[{ required: true, message: 'Please input your CTA!' }]}
        >
          <Input className="text-white border-none h-[71px] bg-[#2A5486]  font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <Form.Item
          name="date"
          label={<span className="text-white">Date</span>}
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker className="text-white border-none h-[71px] bg-[#2A5486]  font-grotesk text-[24px] font-bold border-blue-700 hover:bg-[#2A5486]" />
        </Form.Item>

        <Form.Item
          name="cover"
          label={<span className="text-white">Cover</span>}
        >
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />} className="bg-blue-800 text-white border-blue-700">
              Upload Cover Image
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="content"
          label={<span className="text-white">Content</span>}
          rules={[{ required: true, message: 'Please input your content!' }]}
        >
          <Input.TextArea
            className="bg-blue-800  border-blue-700"
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
