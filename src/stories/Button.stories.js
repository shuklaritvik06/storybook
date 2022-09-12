import Button from "../components/Button";

export default {
    title: 'Button',
    component: Button,  
}

const styles = {
    Primary: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    }
}

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    styles: styles.Primary,
};