import { useState, forwardRef, useImperativeHandle } from "react";

import type { DrawerTriggerRef } from "_types";
import type { AntButtonColor, AntButtonVariant } from "_enums";

import { Drawer, Button } from "antd";


interface Props {
    title: string;
    triggerBtnLabel: string;
    triggerBtnColor?: AntButtonColor;
    triggerBtnVariant?: AntButtonVariant;
    children: React.ReactNode;
}


const DrawerTrigger = forwardRef<DrawerTriggerRef, Props>(
    function DrawerTrigger(props, ref) {

        const { triggerBtnLabel, children, triggerBtnColor, triggerBtnVariant } = props;

        const [open, setOpen] = useState<boolean>(false);

        // Expose methods to parent via ref
        useImperativeHandle(ref, () => ({
            open: () => setOpen(true),
            close: () => setOpen(false),
            toggle: () => setOpen(prev => !prev),
        }));
    
        return (
            <>
                <Button
                    size="middle"
                    color={triggerBtnColor}
                    variant={triggerBtnVariant}
                    onClick={() => setOpen(true)}
                >
                    {triggerBtnLabel}
                </Button>
                <Drawer
                    closable={{ "aria-label": "Close Button" }}
                    onClose={() => setOpen(false)}
                    open={open}
                >
                    {children}
                </Drawer>
            </>
        );
    }
)

export { DrawerTrigger };
