
{{ content() }}

<div align="right">
    {{ link_to("bundle/new", "Create bundle") }}
</div>

{{ form("bundle/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Search bundle</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="idbundle">Idbundle</label>
        </td>
        <td align="left">
            {{ text_field("idbundle", "type" : "numeric") }}
        </td>
    </tr>
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
        <td>{{ submit_button("Search") }}</td>
    </tr>
</table>

</form>
