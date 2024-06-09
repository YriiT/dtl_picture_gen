import React from 'react';
import { Button, ConfigProvider, Form, Input, Col, Radio, Row, InputNumber, Select, Image, Typography } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const PictureGen = () => {
    const [form] = Form.useForm()
    console.log({ form })
    return (
        <Col md={24}>
            <Row gutter={12}>
                <Col md={10}>

                    <ConfigProvider
                        theme={{
                            components: {
                                Form: {
                                    itemMarginBottom: 12
                                },
                            },
                        }}
                    >
                        <Form
                            form={form}
                            name="picture-generator"
                            initialValues={{
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout='vertical'
                            style={{ maxWidth: 600, margin: '0 20px' }}
                        >
                            <Form.Item name='sex'>
                                <Radio.Group>
                                    <Radio value="Мужчина"> Мужчина </Radio>
                                    <Radio value="Женщина"> Женщина </Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Возраст"
                                name="age"
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item name='propuctInfo' label="Данные о продукте">
                                <Input.TextArea rows={2} />
                            </Form.Item>

                            <Form.Item name='chanal' label="Канал">
                                <Select>
                                    <Select.Option value="email">email</Select.Option>
                                    <Select.Option value="push">push</Select.Option>
                                    <Select.Option value="baner">баннер</Select.Option>
                                    <Select.Option value="mobile">мобильное приложение</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form layout="inline">
                                <Form.Item
                                    label="Высота картинки (y)"
                                    name="y"
                                >
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item

                                    label="Ширина картинки (x)"
                                    name="x"
                                >
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item>

                            </Form>
                            <Form.Item name='pictureFormat' label='Формат'>
                                <Radio.Group>
                                    <Radio value="JPEG"> JPEG </Radio>
                                    <Radio value="PNG"> PNG </Radio>
                                    <Radio value="WebP"> WebP </Radio>
                                    <Radio value="SVG"> SVG </Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item

                            >
                                <Button type="primary" htmlType="submit">
                                    Сгенерировать изображение
                                </Button>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>

                </Col>
                <Col md={14}>
                    <Row gutter={[10, 12]} justify={'center'}>
                        <Col md={24}>
                            <Typography.Text>
                                Сгенерированное изображение
                            </Typography.Text>
                        </Col>

                        <Image src='../public/test.jpeg'
                            width={'60%'} />
                    </Row>
                </Col>

            </Row>

        </Col>
    )
};