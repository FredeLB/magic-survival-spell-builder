import { useState } from "react";

import { Badge, Drawer, FloatButton, Typography } from "antd";

import { SPELL_FAMILY } from "_enums";

import {
    generateUniqueKey,
    getUIColorBySpellFamily,
} from "_utils";

const { Title } = Typography;


function Legend() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Drawer
                closable={{ "aria-label": "Close Button" }}
                onClose={() => setOpen(false)}
                open={open}
            >
                <Title >Legend</Title>

                {Object.values(SPELL_FAMILY).map((family) => 
                    <div key={generateUniqueKey()} style={{ marginBottom: '12px' }}>
                        <Badge 
                            key={generateUniqueKey()}
                            color={getUIColorBySpellFamily(family)}
                            size="default"
                        />
                        <span style={{ marginLeft: '8px' }}>{family}</span>
                    </div>
                )}


                {/* <Badge 
                    key={generateUniqueKey()}
                    color={getUIColorBySpellFamily(record.family)}
                    size="default"
                /> */}
            </Drawer>
            <FloatButton 
                onClick={() => setOpen(true)}
            />
        </>
    );
}

export { Legend };
