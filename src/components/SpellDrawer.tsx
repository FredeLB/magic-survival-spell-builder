import { useState } from "react";

import type { Spell } from "types/_index";

import { Drawer, Button } from "antd";

interface SpellDrawerProps {
    title: string;
    btnLabel: string;
    spells: Spell[];
}

function SpellDrawer(props: SpellDrawerProps) {
    const { spells, title, btnLabel } = props;

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                {btnLabel}
            </Button>
            <Drawer
                title={title}
                closable={{ "aria-label": "Close Button" }}
                onClose={onClose}
                open={open}
            >
                {spells.map((spell) => (
                    <p key={spell.id}>{spell.name}</p>
                ))}
            </Drawer>
        </>
    );
}

export { SpellDrawer };
