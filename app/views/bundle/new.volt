
{{ form("bundle/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("bundle", "Go Back") }}</td>
        <td align="right">{{ submit_button("Save") }}</td>
    </tr>
</table>

{{ content() }}

<div align="center">
    <h1>Create bundle</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="amount">Amount</label>
        </td>
        <td align="left">
            {{ text_field("amount", "type" : "numeric") }}
        </td>
    </tr>
    <tr>
        <td align="right">
            <label for="price">Price</label>
        </td>
        <td align="left">
            {{ text_field("price", "type" : "numeric") }}
        </td>
    </tr>

    <tr>
        <td></td>
        <td>{{ submit_button("Save") }}</td>
    </tr>
</table>

</form>
